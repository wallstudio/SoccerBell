/**
 * @param { string } message
 * @returns { string }
 */
export function console_log(message)
{
    console.log(`original: ${message}`);
    message = message.split("").reverse().join("");
    console.log(`reverse : ${message}`);
    return message;
}
