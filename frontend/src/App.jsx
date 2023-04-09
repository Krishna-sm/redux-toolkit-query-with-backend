
import { useEffect, useState } from 'react';
import { useCreateDataMutation, useDeleteDataMutation, useGetAllDataQuery, useUpdateDataMutation } from './service/crud'
import useSWR from 'swr';

function App() {
  const [createData,result]=useCreateDataMutation();
  // const [id]
  const [deleteData,resultDelete]= useDeleteDataMutation();
  const [updateDataFun,resultUpdate]=useUpdateDataMutation();
  // const {data,isError,isLoading}=useGetAllDataQuery();
  const fetcher =(...args)=>fetch(...args).then((res)=>res.json(0))
  const {data,error,isLoading,mutate} = useSWR('http://localhost:8080/api/v1/alldata',fetcher);

  const [ui,setUi]= useState({
    name:'',
    email:'',
    desc:''
  })

  const [updateData,setUpdateData]=useState(null)
  const onCHangeHandler=(e)=>{
   
    setUi({...ui,[e.target.name]:e.target.value})
  }

  const onUpdateCHangeHandler=(e)=>{
   
    setUpdateData({...updateData,[e.target.name]:e.target.value})
  }

  const onUpdateSubmitData=async()=>{
    const user ={
      name:updateData.name,
      email:updateData.email,
      desc:updateData.desc
    }
    await updateDataFun(updateData);
    console.log(resultUpdate)
    setUpdateData(null);
     mutate()
     // console.log(result);
   }
  const onSubmitData=async()=>{
   await createData(ui);
    setUi({
      name:'',
      email:'',
      desc:''
    })
    mutate()
    // console.log(result);
  }

  const deleteDataById=async(id)=>{
await deleteData(id);
mutate()

  }
 
  // console.log(data);

  return (
    <div className="App">
          <div className="form">  
         <>
         name
                <input type="text" value={ui.name}  name='name' onChange={onCHangeHandler} />
                <br /> 
                Email
                <input type="text" value={ui.email} name='email'  onChange={onCHangeHandler} /> <br />
                Desc
                <input type="text" value={ui.desc}  name='desc' onChange={onCHangeHandler} /> <br />
                <button onClick={onSubmitData}>submit Data</button>

         </>

      { updateData &&  <>
         name
                <input type="text" value={updateData.name}  name='name' onChange={onUpdateCHangeHandler} />
                <br /> 
                Email
                <input type="text" value={updateData.email} name='email'  onChange={onUpdateCHangeHandler} /> <br />
                Desc
                <input type="text" value={updateData.desc}  name='desc' onChange={onUpdateCHangeHandler} /> <br />
                <button onClick={onUpdateSubmitData}>Update Data</button>

         </>}



{isLoading && <div>loading...</div>}
{error && <div>error... occored </div>}
                {  data && data.data.length>0 && data.data.map((cur,i,arr)=>{
                  // console.log(cur)
                  return <div>
                         <p>{cur.name} || {cur.email} || {cur.desc} == <button onClick={()=>deleteDataById(cur._id)}>delete</button><button onClick={()=>setUpdateData(cur)}>update</button> </p>
               
                  </div>
                })}
          </div>
    </div>
  )
}

export default App
