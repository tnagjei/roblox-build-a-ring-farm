// input: schema.org-compatible JSON object
// output: application/ld+json script tag
// pos: structured data renderer（更新规则：文件变更需同步本注释与所属目录 README）

type JsonLdProps = {
  data: unknown;
};

export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
