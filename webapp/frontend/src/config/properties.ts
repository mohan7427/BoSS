const server_domain = "http://127.0.0.1:5000";

export const properties = {
    get_jobs: server_domain + "/jobs",
    add_job: server_domain + "/job",
    get_job: server_domain + "/job",
    del_job: server_domain + "/job",
    run_job: server_domain + "/run",
}