
import render from "../index.js";

export default function Login() {
    function handleSubmit(e) {
        if (e && e.target === "form") {
            console.log(e.target);
            e.preventDefault();
            console.log("did not refresh")
       }
    }

    return (
        `<section class="container" style="margin:auto;">
            <form onsubmit="${(event)=>{event.preventDefault();console.log("did not refresh")}}" method="POST">
                <h5 style="text-align:center;">Login or Sign Up</h5>
                <input
                    type="text"
                    name="username"
                    placeholder="name"            
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                />
                <label style="font-size: 1rem;">
                    <input name="remember-me" type="checkbox"/>
                    <span>Remember me</span>
                </label>
                <button type="submit" >Login</button>
                <button type="button">Sign Up</button>
            </form>
        </section>
        `)
}