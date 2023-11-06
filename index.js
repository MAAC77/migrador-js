const ZKLib = require('node-zklib')
const test = async () => {

    console.log('Iniciando...')
    console.log('creando instancia')
    let zkInstance = new ZKLib('10.20.0.7', 4370, 10000, 4000);
    try {
        console.log('socket')
        await zkInstance.createSocket()
        console.log('info')
        await zkInstance.getInfo()
    } catch (e) {
        console.log('error')
        console.log(e)
        if (e.code === 'EADDRINUSE') {
        }
    }

    const users = await zkInstance.getUsers()
    console.log(users)

    // const logs = await zkInstance.getAttendances()
    // console.log(logs)


    // const attendances = await zkInstance.getAttendances((percent, total)=>{
    // })

    // zkInstance.getRealTimeLogs((data)=>{
    //     console.log(data)
    // })

    // const getTime = await zkInstance.getTime();
	// 	  console.log(getTime.toString());

    // Disconnect the machine ( don't do this when you need realtime update :))) 
    await zkInstance.disconnect()

}

test()