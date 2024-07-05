import AuthFrom from '@/components/AuthFrom'

const SignUp = async () => {
    return (
        <section className="flex-center size-full max-sm:px-6">
            <AuthFrom typr="sign-up" />
        </section>
    )
}

export default SignUp