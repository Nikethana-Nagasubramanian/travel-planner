import Header from "../../components/chef-claude/Header"
import Main from "../../components/chef-claude/Main"
import { Analytics } from "@vercel/analytics/react"

export default function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Analytics/>
        </>
    )
}