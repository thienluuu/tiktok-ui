import * as request from '~/utils/request';


export const search = async (q,type='less')=>{
    try{
        const response2 = await request.get('users/search', {
            params: {
                q,
                type,
            }
          })
          return response2.data;
    }
    catch(error) {
        console.log(error)
    }
}
