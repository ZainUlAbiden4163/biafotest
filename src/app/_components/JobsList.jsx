import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function JobList({ jobs }) {
  console.log(jobs, "jobs");
  return (
    <>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-(--color-cyan)/50 rounded-2xl py-5 px-8"
        >
          <h2 className="font-semibold text-2xl text-(--color-cyan)">
            {job.jobTitle}
          </h2>
          <p>{job.jobLevel}</p>
          <p>{job.requiredSkills}</p>
          <p>{job.jobType}</p>
          <div className="flex justify-end">
            <Link
              href=""
              className="flex items-center gap-1 bg-(--color-cyan) w-fit text-(--primary-dark) py-1.5 px-2 rounded-full lg:py-2 lg:px-4"
            >
              Learn More <GoArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
