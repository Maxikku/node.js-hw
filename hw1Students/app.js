const fs = require('fs');
const path = require('path');

const path18 = path.join(process.cwd(), 'students', '1800');
const path20 = path.join(process.cwd(), 'students', '2000');

fs.readdir(path18, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        fs.readdir(path20, (err, files) => {
            if (err) {
                console.log(err);
            } else {
                files.forEach(file => {
                    fs.rename(`${path.join(path20, file)}`, `${path.join(path18, file)}`, err => {
                            console.log(err);
                        }
                    );
                });
            }
        });
        files.forEach(file => {
            fs.rename(`${path.join(path18, file)}`, `${path.join(path20, file)}`, err => {
                console.log(err);
            });
        });
    }
});


// function change(oldPath, newPath) {
//     fs.readdir((oldPath), ((err, files) => {
//         if (err) {
//             console.log(err)
//         } else {
//             files.forEach(file => {
//                 fs.rename(path.join(oldPath, file), path.join(newPath, file), err => console.log(err));
//             })
//         }
//     }));
// }
//
// change(path18, path20);
// change(path20, path18);
