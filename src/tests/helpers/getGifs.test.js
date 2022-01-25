import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    test('Debe traer 20 elementos', async() => {
        const gifs = await getGifs('Goku');
        expect(gifs.length).toBe(20);
    });
    
    test("Debe mostrar cero si no enviamos argumentos", async () => {
			const gifs = await getGifs("");
			expect(gifs.length).toBe(0);
		});
    
})