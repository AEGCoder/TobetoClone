import {apiSlice} from './apiSlice'

const USERS_URL='/api/users'

// apiSlice'in injectEndpoints fonksiyonunu kullanarak userApiSlice oluşturuyoruz
export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) =>  ({
        login:builder.mutation({
            query:(data) => ({
                url:`${USERS_URL}/auth`,
                method:'POST',
                body:data
            })
        }),
        logout:builder.mutation({
            query:() => ({
                url:`${USERS_URL}/logout`,
                method:'POST'
            })
        }),
        // verei gönderme işlemi olduğu için mutation yapıyoruz
        register:builder.mutation({
            query:(data) => ({
                url:`${USERS_URL}`,
                method:'POST',
                body:data
            })
        }),
    })
})

export const {useLoginMutation, useLogoutMutation, useRegisterMutation} = userApiSlice
