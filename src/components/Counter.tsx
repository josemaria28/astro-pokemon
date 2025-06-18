import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
    initValue: number;
    children?: JSX.Element;
}

export const Counter: Component<Props> = (props) => {
    const [count, setCount] = createSignal(props.initValue);

    return (
        <>
            {props.children}
            <p class="mt-7">Counter: {count()}</p>
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