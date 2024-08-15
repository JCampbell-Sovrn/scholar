##scholar.model
connection: "databricks_anayltics"

## include: "/views/*.view.lkml"                # include all views in the views/ folder in this project
##Access Grants:
access_grant: bi_team {
  user_attribute: bi_team
  allowed_values: [ "yes" ]
}
