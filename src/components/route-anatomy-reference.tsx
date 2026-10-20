import { FileCode } from "lucide-react";
import { ROUTE_PATTERN_ROWS } from "@/constants";

export function RouteAnatomyReference() {
  return (
    <div className="w-full rounded-lg border border-blue-200 bg-white p-6 shadow-2xs space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase">
          EDUCATIONAL REFERENCE
        </span>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-gray-200 bg-gray-50 text-xs font-mono text-gray-600">
          <FileCode className="w-3.5 h-3.5 text-gray-500" />
          <span>app/browse/[[...slug]]/page.tsx</span>
        </div>
      </div>

      <h2 className="text-lg font-bold text-gray-950 tracking-tight">
        Next.js Route Anatomy: [[...slug]]
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-gray-200 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  <th className="pb-2 font-semibold">URL PATTERN</th>
                  <th className="pb-2 font-semibold">RESOLVED PARAMS.SLUG</th>
                  <th className="pb-2 font-semibold">RENDERED VIEW</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-mono text-[11px]">
                {ROUTE_PATTERN_ROWS.map((row) => (
                  <tr key={row.urlPattern}>
                    <td className="py-2.5 text-gray-800">{row.urlPattern}</td>
                    <td className="py-2.5 text-gray-500">
                      {row.resolvedParams}
                    </td>
                    <td
                      className={
                        row.isPrimary
                          ? "py-2.5 text-blue-600 font-sans font-medium"
                          : "py-2.5 text-gray-700 font-sans"
                      }
                    >
                      {row.renderedView}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
            Double brackets ([[...slug]]) denote an optional catch-all segment.
            Unlike required catch-all ([...slug]), this route handles the base
            directory without requiring a parallel page.tsx index file.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between space-y-4 border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-6 pt-4 lg:pt-0">
          <div>
            <h4 className="text-xs font-semibold text-gray-900 mb-2">
              Conditional Render Logic
            </h4>

            <div className="rounded-md border border-gray-200 bg-gray-50 p-3.5 font-mono text-[11px] text-gray-800 leading-relaxed overflow-x-auto">
              <span className="text-purple-600">if</span> (!params.slug) &#123;
              <br />
              &nbsp;&nbsp;<span className="text-purple-600">return</span> &lt;
              <span className="text-blue-600">TaxonomyOverview</span> /&gt;;
              <br />
              &#125;
              <br />
              <span className="text-purple-600">return</span> &lt;
              <span className="text-blue-600">CatalogGrid</span> slug=&#123;
              <span className="text-gray-900">params.slug</span>&#125; /&gt;;
            </div>
          </div>

          <div className="space-y-1.5 text-xs pt-2 border-t border-gray-100">
            <div className="flex items-center justify-between text-gray-500">
              <span>Catalog Depth:</span>
              <span className="font-mono text-gray-700">2 Levels Max</span>
            </div>
            <div className="flex items-center justify-between text-gray-500">
              <span>Route Boundary:</span>
              <span className="font-mono text-gray-700">
                Client + Server Component
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
