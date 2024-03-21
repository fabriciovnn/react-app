/* eslint-disable @typescript-eslint/no-explicit-any */
import apiService, { ResponseAPI } from './api.service';

interface CreateProduct {
  description: string;
  value: number;
}

export interface UpdateProduct {
  code: string;
  description?: string;
  value?: number;
}

export async function createProduct(
  data: CreateProduct,
): Promise<ResponseAPI<any>> {
  try {
    const response = await apiService.post('/products', data);

    return {
      code: response.data.code,
      ok: response.data.ok,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: any) {
    return {
      code: error.response.data.code,
      ok: error.response.data.ok,
      message: error.response.data.message,
    };
  }
}

export async function listAllProducts(): Promise<ResponseAPI<any>> {
  try {
    const response = await apiService.get('/products');

    return {
      code: response.data.code,
      ok: response.data.ok,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: any) {
    return {
      code: error.response.data.code,
      ok: error.response.data.ok,
      message: error.response.data.message,
    };
  }
}

export async function listProductByCode(
  code: string,
): Promise<ResponseAPI<any>> {
  try {
    const response = await apiService.get(`/products/${code}`);

    return {
      code: response.data.code,
      ok: response.data.ok,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: any) {
    return {
      code: error.response.data.code,
      ok: error.response.data.ok,
      message: error.response.data.message,
    };
  }
}

export async function updateProduct({
  code,
  ...remaining
}: UpdateProduct): Promise<ResponseAPI<any>> {
  try {
    const response = await apiService.put(`/products/${code}`, remaining);

    return {
      code: response.data.code,
      ok: response.data.ok,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: any) {
    return {
      code: error.response.data.code,
      ok: error.response.data.ok,
      message: error.response.data.message,
    };
  }
}

export async function deleteProduct(code: string): Promise<ResponseAPI<any>> {
  try {
    const response = await apiService.delete(`/products/${code}`);

    return {
      code: response.data.code,
      ok: response.data.ok,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: any) {
    return {
      code: error.response.data.code,
      ok: error.response.data.ok,
      message: error.response.data.message,
    };
  }
}
