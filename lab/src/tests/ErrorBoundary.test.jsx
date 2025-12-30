import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import ErrorBoundary from '../ErrorBoundary';
import Bomb from '../Bomb';

describe('ErrorBoundary', () => {
  let consoleError;

  // 🔕 Silence console.error (optional nhưng nên có)
  beforeAll(() => {
    consoleError = console.error;
    console.error = () => {};
  });

  afterAll(() => {
    console.error = consoleError;
  });

  it('renders fallback UI when child component throws error', () => {
    render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>
    );

    expect(
      screen.getByText(/something went wrong/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/boom!/i)
    ).toBeInTheDocument();
  });
});
