const { Character } = require("./characters");

const quotes = [
  {
    content:
      "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    character: Character.MICHAEL,
  },
  {
    content:
      "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information.",
    character: Character.MICHAEL,
  },
  {
    content: "I’m an early bird and a night owl. So I’m wise and have worms.",
    character: Character.MICHAEL,
  },
  {
    content:
      "Before I do anything I ask myself, ‘Would an idiot do that?’ And if the answer is yes, I do not do that thing.",
    character: Character.DWIGHT,
  },
  {
    content:
      "PowerPoints are the peacocks of the business world; all show, no meat.",
    character: Character.DWIGHT,
  },
  {
    content:
      "In the end, the greatest snowball isn’t a snowball at all. It’s fear. Merry Christmas.",
    character: Character.DWIGHT,
  },
  {
    content: "Oh, you’re paying way too much for worms. Who’s your worm guy?",
    character: Character.CREED,
  },
  {
    content:
      "I run a small fake ID company from my car with a laminating machine that I swiped from the Sheriff’s station.",
    character: Character.CREED,
  },
  {
    content:
      "I’ve been involved in a number of cults, both a leader and a follower. You have more fun as a follower, but you make more money as a leader.",
    character: Character.CREED,
  },
  {
    content:
      "How is it possible that in five years, I’ve had two engagements and only one chair?",
    character: Character.PAM,
  },
  {
    content:
      "I’m guessing Angela is the one in the neighborhood that gives the trick-or-treaters toothbrushes, pennies, walnuts.",
    character: Character.PAM,
  },
  {
    content:
      "I hate the idea that someone out there hates me. I even hate thinking that Al Qaeda hates me. I think if they got to know me, they wouldn’t hate me.",
    character: Character.PAM,
  },
  {
    content: "I find the mystery genre disgusting. I hate being titillated.",
    character: Character.ANGELA,
  },
  {
    content: "I think green is kind of whorish.",
    character: Character.ANGELA,
  },
  {
    content:
      "I know that patience and loyalty are good, and virtuous traits. But sometimes I just think you need to grow a pair.",
    character: Character.ANGELA,
  },
  {
    content:
      "I wish there was a way to know you’re in the good old days, before you’ve actually left them.",
    character: Character.ANDY,
  },
  {
    content:
      "I'm always thinking one step ahead, like a carpenter who makes stairs.",
    character: Character.ANDY,
  },
  {
    content: "Sorry I annoyed you with my friendship.",
    character: Character.ANDY,
  },
  {
    content: "Bears, Beets, Battlestar Galactica.",
    character: Character.JIM,
  },
  {
    content:
      "I'm going to do something I've never done at this job before - try.",
    character: Character.JIM,
  },
  {
    content: "I miss Dwight. Congratulations Universe, you win.",
    character: Character.JIM,
  },
  {
    content: "I talk a lot, so I've learned to tune myself out.",
    character: Character.KELLY,
  },
  {
    content: "This day is BANANAS! B-A-N-A-N-A-S!",
    character: Character.KELLY,
  },
  {
    content: "I am one of the few people who looks hot eating a cupcake.",
    character: Character.KELLY,
  },
  {
    content: "When I President, they see. They see.",
    character: Character.KEVIN,
  },
  {
    content: "Did I stutter?",
    character: Character.STANLEY,
  },
  {
    content:
      "I wake up every morning in a bed that’s too small, drive my daughter to a school that’s too expensive, and then I go to work to a job for which I get paid too little, but on pretzel day? Well, I like pretzel day..",
    character: Character.STANLEY,
  },
  {
    content: "Boy, have you lost your mind, 'cause I will help you find it!",
    character: Character.STANLEY,
  },
  {
    content:
      "I know you're my boss, but you need to get the hell out of my face.",
    character: Character.RYAN,
  },
  {
    content: "Dwight will be missed, not by me so much, but he will be missed.",
    character: Character.RYAN,
  },
  {
    content:
      "Do you ever think there’s gonna be this massive nuclear holocaust, and after all the major nations are destroyed, there’ll just be tribes in the jungles that rise up and survive?",
    character: Character.RYAN,
  },
  {
    content:
      "I'm glad Michael's getting help. He has a lot of issues and he's stupid.",
    character: Character.PHYLLIS,
  },
  {
    content: "We have a gym at home. It's called the bedroom.",
    character: Character.PHYLLIS,
  },
  {
    content:
      "Our office has an unusually large number of unusually large people.",
    character: Character.OSCAR,
  },
  {
    content:
      "The Dunder Mifflin stock symbol is DMI. Do you know what that stands for? Dummies, morons, and idiots. Because that's what you'd have to be to own it. And as one of those idiots, I believe the board owes me answers.",
    character: Character.OSCAR,
  },
  {
    content:
      "Every Halloween I tell him the same thing; you can't bring weapons into the office, and every year he says the same thing; as soon as I get my weapons back I'm gonna kill you.",
    character: Character.TOBY,
  },
  {
    content:
      "I don't think Michael intended to punish me by putting Ryan back here with Kelly. But, if he did intend that... wow. Genius.",
    character: Character.TOBY,
  },
  {
    content: "Tell ya one thing, I'm not gonna be a good mom tonight.",
    character: Character.MEREDITH,
  },
  {
    content: "I've never been cheated on, cheated, or been used to cheat with.",
    character: Character.MEREDITH,
  },
  {
    content: "If I got that card, we'd be in the bathroom doing it right now.",
    character: Character.MEREDITH,
  },
  {
    content:
      "Yeah I wanted the manager job, but I got something much better...this soda. This is mine.",
    character: Character.DARRYL,
  },
  {
    content:
      "And they'd all say the same thing, `I'm coming over baby.` And I would text back, `BTB.` Bring that booty.",
    character: Character.DARRYL,
  },
  {
    content:
      "I taught Mike some, uh... some phrases to help with his interracial conversation. You know, stuff like, `fleece it out`, `going mach 5`, `dinkin' flicka.` You know, things us Negroes say.",
    character: Character.DARRYL,
  },
  {
    content:
      "Planking is one of those things where, eh, you either get it or you don't. And I don't. But I am so excited to be a part of it.",
    character: Character.ERIN,
  },
  {
    content:
      "Holly is ruining Michael's life. He thinks she is so special. And she's so not. Her personality is like a 3. Her sense of humor is a 2. Her ears are like a 7 and a 4. Add it all up and what do you get? 16. And he treats her like she's a perfect 40. It's nuts.",
    character: Character.ERIN,
  },
  {
    content:
      "Apparently, I bear a passing resemblance to Abraham Lincoln. Makes it kind of hard for me to go to places like museums, historical monuments, elementary schools... I don't see it.",
    character: Character.GABE,
  },
  {
    content:
      "I cannot believe that Andy is throwing a party like this just to impress the CEO. Classic Gabe move. Hey, Andy, how about you don't steal my business strategies, and I won't dress like my life is just one long brunch?",
    character: Character.GABE,
  },
];

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

module.exports = {
  quotes,
  getRandomQuote,
};
