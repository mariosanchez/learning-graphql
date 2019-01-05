# With Graphcool Framework

This example shows how create a Graphcool Framework application using the Graphcool CLI tool.

## Run example

1. Install dependencies

   `npm i`

2. Deploy the app

   `npx graphcool deploy`

3. Access the playground with the provided API endpoint.
4. Play with it:

   1. Sign up a new user:

      ```graphql
      mutation {
        signupUser(email: "kevin.bacon@foo.bar", password: "123456") {
          id
        }
      }
      ```

      Save your id!

   2. Log in with your user:

      ```graphql
      mutation {
        authenticateUser(email: "kevin.bacon@foo.bar", password: "123456") {
          id
          token
        }
      }
      ```

      Save your id and token!

   3. Create a new beer:
      ```graphql
      mutation {
        createBeer(
          name: "Butal IPA"
          description: "Crazy hoppy and tasty beer!"
          topDrinkerId: "cjqgl35bz1v9i0153uxogjnqf"
        ) {
          createdAt
          name
          description
          topDrinker {
            name
          }
        }
      }
      ```
      But this time, we would need to add the Authorization Bearer with our login token in our HTTP Headers, if not we will get a permissions error:
      ```json
      {
        "Authorization": "Bearer <our_login_token>"
      }
      ```

## Other CLI commands

- Init new app:

  `npx graphcool init <your_app_name>`

- Add basic email/password auth:

  `npx graphcool add-template graphcool/templates/auth/email-password`

  We can also set social login and two-factor auth.
