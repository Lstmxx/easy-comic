export function createSingle<T>(fn: () => T | null): () => T | null {
  let result: T | null = null;
  return (...args) => {
    return result || (result = fn.apply(null, [...args]));
  };
}
