import { render, screen, fireEvent } from '@testing-library/react';
import Post from '../components/PostComments';


describe('CommentForm', () => {
  test('Deve permitir inserir dois comentários', () => {
    render(<Post />);

    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('submit-button');

    fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
  });
});
