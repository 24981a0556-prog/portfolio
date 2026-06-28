type Props = {
  src: string;
  alt: string;
  url?: string;
};

export function BrowserFrame({ src, alt, url = "preview" }: Props) {
  return (
    <div className="surface-card overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.02] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-4 flex-1 truncate rounded-md border border-white/8 bg-black/30 px-3 py-1 text-xs text-white/45">
          {url}
        </div>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
