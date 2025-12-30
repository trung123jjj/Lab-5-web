import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('LoginForm integration test', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({})
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows welcome message after successful login', async () => {
    render(<LoginForm />);

    await userEvent.type(
      screen.getByLabelText(/email/i),
      'test@example.com'
    );

    await userEvent.type(
      screen.getByLabelText(/password/i),
      '123456'
    );

    await userEvent.click(
      screen.getByRole('button', { name: /login/i })
    );

    expect(
      await screen.findByText(/welcome back/i)
    ).toBeInTheDocument();
  });
});
