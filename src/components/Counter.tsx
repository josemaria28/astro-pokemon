import { createSignal } from "solid-js";

export const Counter = () => {
    const [count, setCount] = createSignal(10);

    return (
        <>
            <h1>Counter: {count()}</h1>
            <button
                onClick={() => setCount(prev => ++prev)}
                class="bg-blue-500 p-2 mr-2 rounded text-amber-50 cursor-pointer">
                Increment
            </button>
            <button
                onClick={() => setCount(prev => --prev)}
                class="bg-blue-500 p-2 mr-2 rounded text-amber-50 cursor-pointer">
                Decrement
            </button>
        </>
    );
}