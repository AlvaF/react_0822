import { fireEvent, screen, render } from "@testing-library/react";
import { AddMessageForm } from "./AddMessageForm";

describe('is a function', () => {
    let id, setMessage;
    beforeEach(() => {
        setMessage = jest.fn()
        id = render(<AddMessageForm addMessage={setMessage} author="USER" />);
    });

    it('input change', () => {
        // let setMessage = jest.fn()
        // render(< AddMessageForm setMessage={setMessage} author="Test" />)
        fireEvent.change(id.getByPlaceholderText('Type your message')), { target: { value: "text" } };
        expect(id.getByPlaceholderText('Type your message').value.toBe("text"))
    });
    it('form submit', () => {
        fireEvent.submit(id.getByTestId('messageForm'));
        expect(id.getByTestId('input')).value.toBe("")
        expect(setMessage).toHaveBeenCalledTimes(1);
    });
})