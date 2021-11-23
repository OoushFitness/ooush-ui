import Head from 'next/head'
import React, { useState } from "react"
import Button from '../../src/components/common/button/button'
import styles from "../../styles/Home.module.css"

export default function Test() {
    const [nameData, setNameData] = useState(undefined as any)

    const getName = () => {
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                setNameData(data.data)
            })
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>API Test Page</title>
                <meta name="description" content="API Test Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to the api test page
                </h1>
                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignContent: "space-between", width: "100%", marginTop: "16px"}}>
                        <Button text="Get Name"
                            textColor="red"
                            textSize={24}
                            backgroundColor="white"
                            theme="primary"
                            onClick={() => getName()}
                            type="button"
                            name="Ooush Button"
                            borderRadius={8}
                            height="80px"
                            width="100%"
                            disabled={false}
                            autofocus={false}
                        />
                        <div style={{
                            margin: "0 16px",
                            width: "100%",
                            minWidth: "200px",
                            padding: "16px",
                            border: "1px solid black",
                            borderRadius: "4px",
                            fontSize: "24px"
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column", fontSize: "16px", lineHeight: "1", margin: "0", padding: "0"}}>
                                {nameData && 
                                    <>
                                        <p style={{padding: "8px 0", margin: "0"}}>Name: {`${nameData.firstName} ${nameData.lastName}`}</p>
                                        <p style={{padding: "8px 0", margin: "0"}}>Email: {nameData.email}</p>
                                        <p style={{padding: "8px 0", margin: "0"}}>Location: {nameData.location}</p>
                                        <p style={{padding: "8px 0", margin: "0"}}>Login Message: {nameData.loginMessage}</p>
                                        <p style={{padding: "8px 0", margin: "0"}}>isLoginSuccess?: {nameData.success.toString()}</p>
                                        <p style={{padding: "8px 0", margin: "0"}}>Token: {nameData.token}</p>
                                        <p style={{padding: "8px 0", margin: "0"}}>UserID: {nameData.userId}</p>
                                        <p style={{padding: "8px 0", margin: "0"}}>UserName: {nameData.userName}</p>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
