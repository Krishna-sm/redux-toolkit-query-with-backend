import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const curdApi =createApi({
    reducerPath:"crudApi",
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:8080/api/v1'
    }),
    endpoints:(builders)=>({
        getAllData:builders.query({
            query:()=>({
                url:'alldata',
                method:'GET'
            })
        }),
        createData:builders.mutation({
            query:(data)=>({
                url:'create',
                method:'POST',
                body:data
            })
        }),
        deleteData:builders.mutation({
            query:(id)=>({
                url:`/delete-data/${id}`,
                method:"DELETE"
            })
        }),
        updateData:builders.mutation({
                query:(data)=>{
                            console.log({data})
                   return({
                        url:`/update-data/${data._id}`,
                        method:"PUT",
                        body:data
                    })
                }
        })
    })
})

export const {useGetAllDataQuery,useCreateDataMutation,useDeleteDataMutation,useUpdateDataMutation} = curdApi