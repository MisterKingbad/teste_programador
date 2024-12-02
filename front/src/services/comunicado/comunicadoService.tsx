import { AxiosResponse } from 'axios';
import { httpClient } from "../../config/axios";

const Url = '/'

export const comunicadoService = () => {

    const getComunicados = async (): Promise<any> => {
        const url: string = `${Url}comunicados`
        const respo: AxiosResponse<any> = await httpClient.get(url)
        return respo.data
    }

    const postComunicado = async (form:any): Promise<any> => {
        const url: string = `${Url}comunicados`
        const respo: AxiosResponse<any> = await httpClient.post(url, form)
        return respo.data
    }

    return {
        getComunicados,
        postComunicado
    }
}