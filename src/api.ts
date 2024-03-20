import { DadosAPI } from "./components/interfaces";

const fetchData = async (url: string): Promise<any | null> => {
  try {
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
      console.error(`Fetch failed with status ${res.status}`);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error(`Error while fetching data from ${url}:`, error.message);
    return null;
  }
};


export const saveAudio = async (audio64: string): Promise<DadosAPI> => {
  const url = `http://10.1.21.75:80/wvc`;

  try {
    const audioData = [
      {
        audio64: audio64
      }
    ]

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(audioData),
    })
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Failed to save audio with Status ${response.status}`);
      console.log(errorMessage);
      throw new Error(`Failed to save audio`)
    }
    const audioRetornado = await response.json();
    return audioRetornado

  } catch (error) {
    console.error('Error while saving audio:', error)
    throw error
  }
}

export const getDadosAudio = async (): Promise<DadosAPI> => {
  const url = `http://10.1.21.75:80/wvc`;

  return fetchData(`${url}/audio-recording?timestamp=${new Date().getTime()}`) as Promise<DadosAPI>;
}
