import { GetStaticProps, GetStaticPaths } from 'next'

import { User } from '../../interfaces'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'

//const apiURL = 'http://localhost/api/user/get';
const apiURL = 'http://localhost:8000/api/user/'

type Props = {
    item?: User
    errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
    if (errors) {
        return (
            <Layout title="Error | Next.js + TypeScript Example">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        )
    }

    return (
        <Layout
            title={`${item ? item.name : 'User Detail'
                } | Next.js + TypeScript Example`}
        >
            {item && <ListDetail item={item} />}
        </Layout>
    )
}

//動的なルーティング
export const getStaticPaths: GetStaticPaths = async () => {
    const url = `${apiURL}get`
    const res = await fetch(url)
    const items: User[] = await res.json()
    const paths = items.map((user) => ({
        params: { id: user.id.toString() },
    }))
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    //1) http://localhost/api/user/id
    const url = `${apiURL}find/${params?.id}`
    const res = await fetch(url)
    const item: User = await res.json()
    return { props: { item } }
}

export default StaticPropsDetail