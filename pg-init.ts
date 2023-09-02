// @ts-ignore
db.createUser(
    {
        user:"user",
        pwd:"user",
        roles: [
            {
                role: 'readWrite',
                db: 'mar-2022'
            }
        ]
    }
)