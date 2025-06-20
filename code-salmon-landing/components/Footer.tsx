export default function Footer() {
  return (
   <footer className="text-gray-400 text-sm py-10 px-6 text-center">
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <span className='text-salmon font-semibold'>Code Salmon</span>. All
        rights reserved.
      </p>
      <div className='mt-2'>
        <a href="https://github.com/OSP-54-2/codesalmon" className='underline mx-2 hover:text-salmon'>
          GitHub
        </a>
      </div>
    </footer>
  );
}
