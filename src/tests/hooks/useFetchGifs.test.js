import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el Hook useFetchGifs", () => {

	test("Debe de retornar el estado inical", async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs("Goku")
		);
		const { data, loading } = result.current;

        await waitForNextUpdate();
		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});

	test("Debe de retornar un array de imagenes y el loading en false", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Goku"));
        await waitForNextUpdate();

		const { data, loading } = result.current;

		expect(data.length).toBe(20);
		expect(loading).toBe(false);
	});
});
