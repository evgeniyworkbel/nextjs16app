"use client";

export const ClientComp = () => {
  console.group("envs at client");
  console.log("process.env.IS_CUSTOM_VPS=", process.env.IS_CUSTOM_VPS);
  console.log(
    "process.env.NEXT_PUBLIC_YANDEX_METRIKA_COUNTER_ID=",
    process.env.NEXT_PUBLIC_YANDEX_METRIKA_COUNTER_ID,
  );
  console.groupEnd();
  return (
    <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
      <a
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Deploy Now
      </a>
      <a
        className="flex h-12 w-full items-center justify-center rounded-full border border-solid  px-5 transition-colors hover:border-transparent  dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentation
      </a>
    </div>
  );
};
