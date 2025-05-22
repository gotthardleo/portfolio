
const Footer = () => {
  return (
    <footer className="bg-light-0 dark:bg-dark-0 shadow-md">
      <div className="w-full h-fit mx-auto max-w-screen-xl p-4 flex justify-center items-center">
        <span className="flex text-sm text-dark-1/70 dark:text-light-1/70">
          <p className="mr-2">© {(new Date).getFullYear().toString()}</p>
          <div className="hover:-translate-y-0.5 transition-transform duration-200"><a href="https://github.com/" className="hover:underline">Farell Reyhan Pradana.</a></div>
          <p className="ml-1">All Rights Reserved.</p>
        </span>
      </div>
    </footer>
  );
};

export { Footer };
