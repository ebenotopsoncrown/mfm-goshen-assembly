export function Container({ children, className = "" }: any) {
  return <div className={`mx-auto max-w-7xl px-4 ${className}`}>{children}</div>;
}
