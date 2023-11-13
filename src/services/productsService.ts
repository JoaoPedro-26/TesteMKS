import Api from './Api';
import Swal from 'sweetalert2';

export const getProductsList = async () => {
    try {
      const response = await Api.get('products', {
        params: {page: 1, rows: 20, sortBy: 'id', orderBy: 'DESC'},
      });
      return response.data;
    } catch (error) {
        Swal.fire({
            title: 'Erro ao buscar os produtos',
            text: `${error}`,
            icon: 'error'
        })
    }
  };