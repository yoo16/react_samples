import Link from 'next/link'

export default () =>
  <div>
    <h1>Hello Next.js</h1>
    <div>
      このページは Next.js のトップページです。
        </div>
    <ul>
      <li>
        <Link href="/profile">
          <a>プロフィール</a>
        </Link>
      </li>
    </ul>
  </div>