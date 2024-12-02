import { AxiosResponse } from 'axios';
import { httpClient } from "../../config/axios";

const Url = '/'

export const comunicadoService = () => {

    const getComunicados = async (): Promise<any> => {
        const url:string = `${Url}comunicados`
        const respo:AxiosResponse<any> = await httpClient.get(url)
        return respo.data
      }
    
      return {
        getComunicados    
      }
}