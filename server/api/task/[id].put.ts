import  {prisma}  from "@/server/lib/prisma";


export default defineEventHandler(async (event) => {
    
    const body = await readBody(event);
    const id = parseInt(event.context.params!.id);

    return await prisma.task.update({
        where: {id},
        data: {
            title: body.title,
            completed: body.completed
        }
    })

})