const sendDataToBackend = async (base64DataUrl: string) => {
  try {
    const response = await fetch('URL_BACKEND', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dataUrl: base64DataUrl }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log('Resposta do servidor:', responseData);
  } catch (error) {
    console.error('Erro ao enviar os dados para o backend:', error);
  }
};
