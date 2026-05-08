import React from "react";

export default function PageNotFound({ pageName = "requested page" }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h1>

        <p className="text-slate-600">
          The page{" "}
          <span className="font-medium text-slate-700">"{pageName}"</span>{" "}
          could not be found in this application.
        </p>
      </div>
    </div>
  );
}
                        <h2 className="text-2xl font-medium text-slate-800">
                            Page Not Found
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            The page <span className="font-medium text-slate-700">"{pageName}"</span> could not be found in this application.
                        </p>
                    </div>
