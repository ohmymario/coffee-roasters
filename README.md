# Coffee Roasters

Made with Next.js! This was a fun exercise using a professional design from Frontend Mentor. The design is provided in Figma and is recreated to be as near pixel-perfect as possible.

**Link to project:** https://coffee-roasters.vercel.app/

![desktop view of Coffee Roasters](demo/site_demo.gif)

## How It's Made:

**Tech used:** Next.js, React, Styled-Components, Next Image, Javascript, Vercel Hosting

Next.js was what I wanted to use as I am comfortable with React but wanted something super fast and works for my application, which was a static website.

Working from a design gave me the freedom to worry more about how the application's structure would be. I planned to translate the design into small components as much as possible.

styled-components helped keep all styles "isolated" from one another. No conflicts 😁

Something I've never used before was the Next Image Component. This component completely took care of image optimization. Implementing wasn't difficult as I imported an Image Component from Next.js, gave it my image, and then Next.js handled it for me.

## Optimizations
*(optional)*

If I had more time, one issue that I could not fully fix was rendering different images depending on the viewport. The Next Image Component takes one image and optimizes it for different viewports but swapping the image during resize didn't seem to have an elegant solution.

I made a custom modal for when a customer wants to check out but noticed that the design changes from text within the button. I first tried this within CSS but couldn't get the desired result. So then I made a custom hook to track the window's width. I could show what I wanted at the correct width.

## Lessons Learned:

A pre-made design is something that I never had worked with and learning to make something pixel-perfect can be tricky. When tackling the CSS, I made sure to allow the design to still remain responsive.

I gained a lot of experience translating design to components and deciding how they may interact with each other and function when others aren't present. If I come back to this project, I also want to be confident that I can move code around with minimal maintenance to get it back up and running.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Pizza Site:** https://github.com/ohmymario/pizza-site

**Pod Landing Page:** https://github.com/ohmymario/pod-landing-page

**Color Palette:** https://github.com/ohmymario/Color-Palette
