# hospital-api
A hospital api app for registration/login of doctors,registration of patients,creating reports,showing reports,and showing status.

* Router used
* /doctors/register → with username and password
* /doctors/login → returns the JWT to be used
* /patients/register
* /patients/:id/create_report
* /patients/:id/all_reports → List all the reports of a patient oldest to latest
* /reports/:status → List all the reports of all the patients filtered by a specific status
