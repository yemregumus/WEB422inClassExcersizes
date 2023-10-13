export function middleware(request){
    console.log('Requested', request.url)

    if(request.nextUrl.pathname.startsWith('/about')){
        console.log('====================About Pages==================')
    }
    if(request.nextUrl.pathname.startsWith('/profile')){
        console.log('====================Profile Pages==================')
    }
    if(request.nextUrl.pathname.startsWith('/')){
        console.log('====================Home Pages==================')
    }
} 

export const config = {
    matcher: ['/', '/about', '/profile','/dashboard/:path*']
};