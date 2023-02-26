import React from 'react';
import './testimonial.css';

const Testimonial = () => {
  return (
    <div className="testi-body">
      <h1 className="testi-tagline">CLIENT TESTIMONIALS</h1>
      <div class="testi-container">
        <div class="testi-card">
          <div class="testi-header">
            <img
              src="https://assets.codepen.io/5126815/image-daniel.jpg"
              alt="Daniel Clifford"
              class="avatar"
            />
            <div class="details">
              <div class="name">Daniel Clifford</div>
              <div class="status">Verified Graduate</div>
            </div>
          </div>
          <div class="title">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </div>
          <div class="quote">
            I was an EMT for many years before I joined the bootcamp. I've been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup.
          </div>
        </div>

        <div class="testi-card">
          <div class="testi-header">
            <img
              src="https://assets.codepen.io/5126815/image-jonathan.jpg"
              alt="Jonathan Walters"
              class="avatar"
            />
            <div class="details">
              <div class="name">Jonathan Walters</div>
              <div class="status">Verified Graduate</div>
            </div>
          </div>
          <div class="title">
            The team was very supportive and kept me motivated
          </div>
          <div class="quote">
            I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a bit company. This was one of the
            best investments I've made in myself.
          </div>
        </div>

        <div class="testi-card">
          <div class="testi-header">
            <img
              src="https://assets.codepen.io/5126815/image-jeanette.jpg"
              alt="Jeanette Harmon"
              class="avatar"
            />
            <div class="details">
              <div class="name">Jeanette Harmon</div>
              <div class="status">Verified Graduate</div>
            </div>
          </div>
          <div class="title">An overall wonderful and rewarding experience</div>
          <div class="quote">
            Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love.
          </div>
        </div>

        <div class="testi-card">
          <div class="testi-header">
            <img
              src="https://assets.codepen.io/5126815/image-patrick.jpg"
              alt="Patrick Abrams"
              class="avatar"
            />
            <div class="details">
              <div class="name">Patrick Abrams</div>
              <div class="status">Verified Graduate</div>
            </div>
          </div>
          <div class="title">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experience was
            easy.
          </div>
          <div class="quote">
            The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal atention you need from an incredible community of smart and
            amazing people.
          </div>
        </div>

        <div class="testi-card">
          <div class="testi-header">
            <img
              src="https://assets.codepen.io/5126815/image-kira.jpg"
              alt="Kira Whittle"
              class="avatar"
            />
            <div class="details">
              <div class="name">Kira Whittle</div>
              <div class="status">Verified Graduate</div>
            </div>
          </div>
          <div class="title">
            Such a life-changing experience. Highly recommend!
          </div>
          <div class="quote">
            Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire cirriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutoral could ever have.
            In fact, I've often referred to it during interviews as an example
            of my development experience. It certainly helped me land a job as a
            full-stack developoer after receiving multiple offers. 100%
            recommend!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
