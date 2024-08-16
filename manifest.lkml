project_name: "scholar"

application: scholar {
  label: "Scholar"
  url: "https://localhost:8080/bundle.js"
  ## file: "bundle.js"
  entitlements: {
    core_api_methods: [
      "run_inline_query",
      "lookml_model_explore",
      "all_lookml_models",
      "me",
      "all_looks",
      "look",
      "create_sql_query",
      "run_sql_query"
    ]
    external_api_urls: [
      "http://127.0.0.1:3000",
      "http://localhost:3000",
      "https://localhost:8080/bundle.js",
      "https://localhost:8080/",
      "https://*.googleapis.com",
      "https://*.github.com",
      "https://sovrn.looker.com/extensions/scholar",
      "https://github.com/JCampbell-Sovrn/scholar.git"
    ]
  }
}
