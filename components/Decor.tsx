// Background decoration from the Figma "background" frame: outlined squares + dots at the page edges
export function Decor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden h-full overflow-hidden lg:block">
      <span className="absolute -left-[77px] top-[1200px] h-[155px] w-[155px] border border-gray/60" />
      <span className="absolute -right-[77px] top-[1200px] h-[155px] w-[155px] border border-gray/60" />
      <span className="absolute -right-[10px] top-[700px] h-[91px] w-[91px] border border-primary/60" />
    </div>
  );
}
