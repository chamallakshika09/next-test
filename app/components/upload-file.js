'use server';

import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { callApi } from '../utils/apiHelpers';

export const uploadFile = async (formData) => {
  try {
    await callApi();
    const file = formData.get('file');
    const newBlob = await put(file.name, file, {
      access: 'public',
    });
    revalidatePath('/');
    await callApi();
    return newBlob;
  } catch (error) {
    await callApi();
    throw error;
  }
};
