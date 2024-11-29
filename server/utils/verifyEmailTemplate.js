const verifyEmailTemplate =({name,url}) => {
    return `
    <p> Thank you for registering with us ${name}</p>
    <a href=${url} style="color:white;background:blue;margin-top:10px">
    Verify Email
    </a>
    `
}

export default verifyEmailTemplate;