import os from 'os';
const getosdetails = () => {
    try {
        const arch = os.arch();
        console.log(arch);
        const totalmem = os.totalmem();
        console.log (totalmem/(1024*1024*1024) ) ;
        const freemem = os.freemem();
        console.log(freemem/(1024*1024*1024));
    }
    catch (error) {
        console.log("unable to get os details");
    }
}
getosdetails();
