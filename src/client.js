import sanityClient from '@sanity/client'

export default sanityClient({
    projectId:"oxfh7dab",
    dataset:"production",
    useCdn: false,
})