import { NextResponse } from "next/server";

export default function middleware(req){
    const user= req.cookies.get("user")
    const token= req.cookies.get("token")
    const url = req.url;
    if(url.includes("/app") && (!user || !token)){
        const url = req.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url);
    } else if(url.includes("/login")&& user && token){
        const url = req.nextUrl.clone()
        url.pathname = '/app'
        return NextResponse.redirect(url);
    }
}